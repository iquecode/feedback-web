import { CloseButton } from "../CloseButton";

import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title:'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title:'Idéia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title:'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            <header>
                <span className="text-xl leading-6" >Deixe seu feedback</span>
                <CloseButton />
            </header>


            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                

            ) : (


                <p>Hello World</p>


            )}

            

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://ique.dev">ique.dev</a>
            </footer>

        </div>
    )
}