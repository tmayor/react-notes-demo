import React, { Component } from 'react'
import './Note.css'
import PropTypes from 'prop-types'

class Note extends Component {
    constructor(props) {
        super(props)
        this.noteContent = props.noteContent
        this.noteId = props.noteId
        this.handleRemoveNote = this.handleRemoveNote.bind(this)
    }

    handleRemoveNote(id) {
        this.props.removeNote(id)
    }

    render(props) {
        return(
            <div className="note dafe-in">
                <span
                    className="closebtn"
                    onClick={() => this.handleRemoveNote(this.noteId)}
                >
                    X
                </span>
                <p className="noteContent">{ this.noteContent }</p>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

// Note.propTypes = {}
export default Note