export interface Question {
    question: string;
    answers: string[];
    required: boolean;
  }

export class Survey {
    _id!: string;
    owner!: string;
    isPublic!: boolean;
    isUniqueAnswer!: boolean;
    title!: string;
    description!: string;
    finalDate!: string;
    limitAnswer!: number;
    questions!: Array<any>;

    constructor(){}

    isQuestionsValid(): boolean {
        if (this.hasEmptyQuestion() || this.hasQuestionsWithLessThanTwoAnswer()) {
            return false;
        }

        return true;
    }

    private hasEmptyQuestion(): boolean{
        let emptyQuestion = this.questions.find((question) => !question.question || question.question.replace(/\s/g, '').length == 0);

        return emptyQuestion ? true : false;
    }

    private hasQuestionsWithLessThanTwoAnswer(): boolean {
        let questionsWithLessThanTwoAnswers = this.questions.find((question) => question.answers.length < 2);

        return questionsWithLessThanTwoAnswers ? true : false;
    }
}