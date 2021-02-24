class Question{
    constructor() {
        this.button = createButton('submit answer');
        this.input = createInput('enter name');
        this.input1 = createInput('enter option No.');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
      }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,30);

        this.question.html("Question: 1- What starts with E, ends with E but only has one letter?");
        this.question.position(100, 100);
        this.option1.html("1: everyone");
        this.option1.position(200, 150);
        this.option2.html("2: envelope");
        this.option2.position(200, 180);
        this.option3.html("3: estimate");
        this.option3.position(200, 210);
        this.option4.html("4: example");
        this.option4.position(200, 240);

        this.input.position(150,300);
        this.input1.position(400,300);

        this.button.position(310,350);
        
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            this.input1.hide();
            this.title.hide();
            this.question.hide(); 
            this.option1.hide();
            this.option2.hide();
            this.option3.hide();
            this.option4.hide();
            background("green");

            contestant.name = this.input1.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            this.greeting.html("You have submitted your answer");
            this.greeting.position(200, 100);
            
        });
    }     
}    
