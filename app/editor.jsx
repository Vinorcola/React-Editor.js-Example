import EditorJS from "@editorjs/editorjs"
import { useEffect } from "react"

export default function Editor({ id }) {
    useEffect(() => {
        const editor = new EditorJS({
            holder: id,
        })
    }, [])

    return (
        <div id={id} />
    )
}
