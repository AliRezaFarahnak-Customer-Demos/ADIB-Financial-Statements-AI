import { Example } from "./Example";
import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "How did COVID-19 impact ADIB's performance in 2020?",
    "What recovery strategies did ADIB use in 2021?",
    "How did ADIB enhance digital banking in 2021?",
    "What impact did inflation have on ADIB in 2022?",
    "What regulatory changes affected ADIB in 2023?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years? Compare it to the past S&P 500 performance",
    "Can you identify any correlation between oil prices and stock market trends?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
