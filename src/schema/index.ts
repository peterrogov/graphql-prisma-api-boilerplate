import { nexusPrismaPlugin } from 'nexus-prisma'
import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import * as types from './types'
import { Query } from './query';

export const schema = makeSchema({
    types: [types, Query],
    plugins: [nexusPrismaPlugin()],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/../generated/nexus.ts',
    },
    typegenAutoConfig: {
        sources: [
            {
                source: '@prisma/client',
                alias: 'client',
            },
            {
                source: require.resolve('./context'),
                alias: 'Context',
            },
        ],
        contextType: 'Context.Context',
    },
})
