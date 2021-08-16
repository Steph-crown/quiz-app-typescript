import styled from "styled-components";

export const QuestionWrapper = styled.div`
    width: 500px;
    max-width: 90vw;
    background: white;
    box-shadow: 2px 2px solid grey;
    padding: 20px;

    p {
        font-size: 1em;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const BottomWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8em;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
        correct ? "green"
            : !correct && userClicked ?
                "red" : "#297dd1"
        };
        border-radius: 8px;
        outline: none;
        border: none;
        color: white;
    }
`