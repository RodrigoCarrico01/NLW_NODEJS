import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import {
    validatorCompiler, 
    serializerCompiler,
    type ZodTypeProvider, 
    jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'
import { accessInviteLinkRoute } from './routes/access-invite-link'

import { env } from './env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'NLW Connect',
            version: '0.0.1',
        }
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)

app.listen({port: env.PORT }).then(()=>{
    console.log('HTTP server running!')
})