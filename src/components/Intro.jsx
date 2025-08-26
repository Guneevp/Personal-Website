export default function Intro() {
    return (
        <>
            <div className={"intro"}>
                <div className={"intro-text"}>
                <h1>Hi there!</h1>
                <p>Thanks for checking out my portfolio. In short, I'm an aspiring software developer from the University of Toronto. I'm in my second year, and I would love to work with you on any of your projects! To keep my tech skills simple I would say...</p>
                </div>

                <img src='src/assets/img.png' alt={"Image here"}/>
            </div>
            <div className={'intro-skills'}>
                <span> <b>I am best at:</b> Python,  </span>
                <span> <b>I am good at:</b> abc </span>
            </div>
        </>
    )
}