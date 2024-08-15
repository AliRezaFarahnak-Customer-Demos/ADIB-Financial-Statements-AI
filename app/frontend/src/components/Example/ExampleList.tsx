import { Example } from "./Example";
import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "How did COVID-19 impact ADIB's performance in 2020?",
    "What recovery strategies did ADIB use in 2021?",
    "How did ADIB enhance digital banking in 2021?",
    "What impact did inflation have on ADIB in 2022?",
    "What regulatory changes affected ADIB in 2023?",
    "How did ADIB's financial performance respond to the COVID-19 pandemic in 2020?",
    "What measures did ADIB implement to support customers during the economic downturn?",
    "What was the percentage change in net profit for ADIB in 2020 compared to 2019?",
    "How did ADIB's loan growth in 2021 reflect the recovery from the pandemic?",
    "How did the bank's cost-to-income ratio change in 2021?",
    "What was the impact of rising interest rates on ADIB's profitability in 2022?",
    "How did ADIB's Emiratisation efforts progress in 2022?",
    "What were the key drivers behind ADIB's revenue growth in 2022?",
    "How did geopolitical events in the Middle East affect ADIB's operations from 2020 to 2022?",
    "What role did sustainability initiatives play in ADIB's strategic planning during these years?",
    "How did ADIB's capital adequacy ratio evolve from 2020 to 2022?"
];

const GPT4V_EXAMPLES: string[] = [
    "How did COVID-19 impact ADIB's performance in 2020?",
    "What recovery strategies did ADIB use in 2021?",
    "How did ADIB enhance digital banking in 2021?",
    "What impact did inflation have on ADIB in 2022?",
    "What regulatory changes affected ADIB in 2023?",
    "How did ADIB's financial performance respond to the COVID-19 pandemic in 2020?",
    "What measures did ADIB implement to support customers during the economic downturn?",
    "What was the percentage change in net profit for ADIB in 2020 compared to 2019?",
    "How did ADIB's loan growth in 2021 reflect the recovery from the pandemic?",
    "How did the bank's cost-to-income ratio change in 2021?",
    "What was the impact of rising interest rates on ADIB's profitability in 2022?",
    "How did ADIB's Emiratisation efforts progress in 2022?",
    "What were the key drivers behind ADIB's revenue growth in 2022?",
    "How did geopolitical events in the Middle East affect ADIB's operations from 2020 to 2022?",
    "What role did sustainability initiatives play in ADIB's strategic planning during these years?",
    "How did ADIB's capital adequacy ratio evolve from 2020 to 2022?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    const examples = useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES;
    console.log("Rendering ExampleList with examples:", examples); // Debugging line
    return (
        <ul className={styles.examplesNavList}>
            {examples.map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
