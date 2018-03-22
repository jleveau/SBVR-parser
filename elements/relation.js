
class Relation {

}

class Match extends Relation {
    constructor() {
        super();
        this.name = "match";
    }
}

class Have extends Relation {
    constructor() {
        super();
        this.name = "have";
    }
}

class Equal extends Relation {
    constructor() {
        super();
        this.name = "equal";
    }
}

class LesserThan extends Relation {
    constructor() {
        super();
        this.name = "lesserThan";
    }
}

class GreaterThan extends Relation {
    constructor() {
        super();
        this.name = "greaterThan";
    }
}

class Before extends Relation {
    constructor() {
        super();
        this.name = "before";
    }
}

class After extends Relation {
    constructor() {
        super();
        this.name = "after";
    }
}

module.exports = {
    Have,
    Equal,
    LesserThan,
    GreaterThan,
    Before,
    After,
    Match
};

