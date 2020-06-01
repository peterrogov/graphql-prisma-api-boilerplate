import { intArg, queryType, mutationType, mutationField, stringArg } from '@nexus/schema'
import { Context } from './context';

export const Query = queryType({
  definition(t) {
    
  }
})

const Mut = mutationField("test", {
  resolve() {
    
  }
})