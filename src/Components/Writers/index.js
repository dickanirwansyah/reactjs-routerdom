import React, { Fragment } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Writer from './Writer';
import {NotFound} from '../Errors';

export default ({ match: {url}, writers }) => 
<Fragment>
    <ul>
        {writers.map(({id, name, born, deceased, description, image}) => 
            <li key={id}>
                <Link to={`${url}/${id}`}>{name}</Link>
            </li>)}
    </ul>

    <Route exact path={url} render={() => <h3>Please select a writer from above.</h3>}/>

    <Route path={`${url}/:writeId`} render={
        props => {
            const writer = writers.find(({id}) => id === props.match.params.writeId)
            if(!writer){
                return <NotFound/>
            }
            return <Writer {...props} {... writer}/>
        }
    }
    />
</Fragment>