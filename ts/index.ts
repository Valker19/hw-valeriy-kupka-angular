// Создать класс User у которого будут поля name, age, achievement
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchievement(achievement);
// Создать класс Achievement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero
// 
// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achievement.

interface UserI {
    name: string,
    age: number,
    achievements: Array<string>;
    
    addYearOfLife(): void,
    AddAchievement(achievement: string): void;
}

interface AchievementI {
    type: string,
    heroical: boolean,
    description: string
}

namespace SuperHero {
    export class Achievement implements AchievementI {
        constructor(public type: string, public heroical: boolean, public description: string) {
            this.type = type;
            this.heroical = heroical;
            this.description = description;
        }
    }

    export class User implements UserI, Achievement {
        public name: string
        public age: number
        public achievements: Array<string>
        public type: string
        public heroical: boolean
        public description: string

        constructor({name, age, achievements, type, heroical, description}) {
            this.name = name;
            this.age = age;
            this.achievements = achievements;
            this.type = type;
            this.heroical = heroical;
            this.description = description;
        }

        addYearOfLife(): void {
            this.age++;                 // Или 'this.age += 1;'
        }

        AddAchievement(achievement: string): void {
            this.achievements.push(achievement);
        }
    }
}

const spiderMan: SuperHero.User = new SuperHero.User({
    name: 'SpiderMan',
    age: 19,
    achievements: ['spider', 'slyga narody'],
    type: 'heroi',
    heroical: true,
    description: 'easycode'
});

const ironMan: SuperHero.User = new SuperHero.User({
    name: 'IronMan',
    age: 16,
    achievements: ['...', '...'],
    type: 'super-heroi',
    heroical: true,
    description: 'zelenskiy'
});