import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

export default function Editor({ id, content }) {
    return (
        <ReactEditorJS holder={id} defaultValue={content}>
            <div id={id} />
        </ReactEditorJS>
    )
}
