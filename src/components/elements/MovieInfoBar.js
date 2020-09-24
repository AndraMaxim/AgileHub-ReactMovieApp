import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { calcTime } from '../../helpers';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time }) => (
    <StyledMovieInfoBar>
        <div className="movieinfobar-content">
            <div className="movieinfobar_content_col">
                <FontAwesomeIcon icon={faClock} name="clock" />
                <span className="movieinfobar_info">
                    Running time: {calcTime(time)}
                </span>
            </div>
        </div>
    </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
}

export default MovieInfoBar;