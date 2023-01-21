export interface AnswerProp {
    question_key: number;
    option_key: number;
    option_text: string;
}

export class Answer {
    surveyId!: string;
    owner?: string;
    connectionId?: string;
    answer!: Array<Answer>

    constructor() {}
}