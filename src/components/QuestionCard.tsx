import { FC, MouseEvent } from "react"
import { AnswerObject } from "../App"
import { BottomWrapper, QuestionWrapper } from "../styles/QuestionCard.style"

type Props = {
    question: string;
    answers: string[];
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return (
        <QuestionWrapper>
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {
                    answers.map(answer => (
                        <BottomWrapper
                         key={answer}
                         correct={userAnswer?.correctAnswer === answer}
                         userClicked={userAnswer?.answer === answer}
                         >
                            <button disabled={Boolean(userAnswer)} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                            </button>
                        </BottomWrapper>
                    ))
                }
            </div>
        </QuestionWrapper>
    )
}