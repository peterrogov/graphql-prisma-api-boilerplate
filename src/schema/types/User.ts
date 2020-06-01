import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'

export const User = objectType({
  name: 'User',  
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email();
    t.model.roles();
  },
})

export const UserRole = objectType({
  name: "UserRole",
  definition(t){
    t.model.id()
    t.model.role()
    t.model.user()
  }
})