// Task 8: Enum and permissions

enum Role {
  Admin,
  User,
  Guest
}

function getPermissions(role: Role): string[] {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];
    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];
    default:
      const _exhaustiveCheck: never = role;
      return _exhaustiveCheck;
  }
}

console.log("Admin permissions:", getPermissions(Role.Admin));
console.log("User permissions:", getPermissions(Role.User));
console.log("Guest permissions:", getPermissions(Role.Guest));

export { Role, getPermissions };