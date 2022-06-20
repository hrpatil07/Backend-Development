var standard;
(function (standard) {
    standard[standard["School"] = 0] = "School";
    standard[standard["college"] = 1] = "college";
    standard[standard["job"] = 2] = "job";
})(standard || (standard = {}));
;
//by typescript if we do not mention the value by default it is 0 , 1 , 2 , ...
console.log(standard);
var role;
(function (role) {
    role[role["admin"] = 1] = "admin";
    role[role["read_only"] = 2] = "read_only";
    role[role["author"] = 3] = "author";
})(role || (role = {}));
;
//now it would be 1 , 2 , 3 , ...
var role2;
(function (role2) {
    role2[role2["admin"] = 10] = "admin";
    role2[role2["read"] = 22] = "read";
    role2[role2["author"] = 99] = "author";
})(role2 || (role2 = {}));
;
//you can add all different also
var role3;
(function (role3) {
    role3["admin"] = "admin";
    role3["read_only"] = "read_only";
    role3[role3["author"] = 99] = "author";
})(role3 || (role3 = {}));
;
//you can add string also 
