import dtr from "./degreeconverter"

export let leftAnim = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 }
}

export let rightAnim = {
    initial: { opacity: 0, x: +200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: +200 }
}

export let upAnim = {
    initial: { opacity: 0, y: +200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: +200 }
}

export let divideAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

export let backgroundAnim = {
    initial: {
        rotateX: dtr(35),
        rotateY: dtr(145),
    },
    animate: {
        rotateX: [null, dtr(35), dtr(40), dtr(40), dtr(35)],
        rotateY: [null, dtr(165), dtr(165), dtr(145), dtr(145)],
    },
}