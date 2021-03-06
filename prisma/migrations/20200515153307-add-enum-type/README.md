# Migration `20200515153307-add-enum-type`

This migration has been generated by Peter Rogov at 5/15/2020, 3:33:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "UserRoleType" AS ENUM ('USER', 'ADMIN');

ALTER TABLE "public"."UserRole" DROP CONSTRAINT IF EXiSTS "UserRole_userId_fkey",
DROP COLUMN "role",
ADD COLUMN "role" "UserRoleType" NOT NULL ;

ALTER TABLE "public"."UserRole" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER INDEX "public"."User_email_key" RENAME TO "User.email"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200515153307-add-enum-type
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+model User {
+  email String     @unique
+  id    Int        @default(autoincrement()) @id
+  name  String?
+  roles UserRole[]
+}
+
+enum UserRoleType {
+  USER
+  ADMIN
+}
+
+model UserRole {
+  id     Int          @default(autoincrement()) @id
+  role   UserRoleType
+  userId Int          @default(autoincrement())
+  user   User         @relation(fields: [userId], references: [id])
+}
```


