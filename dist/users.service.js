"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const data = require("./sample-data.json");
let UsersService = class UsersService {
    async findOne(username) {
        return data.users.find((user) => user.username === username);
    }
    getUsers() {
        return data.users;
    }
    getUser(n) {
        for (let i = 0; i <= data.users.length; i++) {
            if (data.users[i].id == n) {
                return data.users[i];
            }
        }
    }
    addUsers(name, position, password) {
        const newUser = {
            username: name,
            position: position,
            password: password,
            id: data.users.length + 1,
        };
        data.users.push(newUser);
    }
    editProfile(user, position, pass) {
        if (position) {
            user.position = position;
        }
        if (pass) {
            user.password = pass;
        }
        for (let i = 0; i < data.users.length; i++) {
            if (data.users[i].id == user.id) {
                data.users[i] = user;
            }
        }
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
};
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map