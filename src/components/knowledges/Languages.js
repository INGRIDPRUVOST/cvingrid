import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'Javascript', xp:1},
            {id: 2, value: 'Css3', xp:1},
            {id: 3, value: 'Html5', xp:1}
        ],
        frameworks: [
            {id: 1, value:'React', xp:1},
            {id: 2, value:'Bootstrap', xp:1},
            {id: 3, value:'Wordpress', xp:1}

        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworkDisplay"
                    title="frameworks & bibliothèques"
                    /> 
            </div>
        )
    }
}
