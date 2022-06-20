enum standard  {School,college,job};
//by typescript if we do not mention the value by default it is 0 , 1 , 2 , ...
console.log(standard)
enum role {admin = 1 , read_only , author};
//now it would be 1 , 2 , 3 , ...
enum role2 {admin = 10 , read = 22 , author = 99};
//you can add all different also
enum role3 {admin = 'admin' , read_only = 'read_only' , author = 99};
//you can add string also 