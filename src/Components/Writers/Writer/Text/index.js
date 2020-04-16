import React, { Fragment } from 'react';

export default ({id, title, description, published }) => 
<Fragment>
<h4>{title}{published ? `(${published})` : ''}</h4>
<p>{description ? description : <i>No Description</i>}</p>
</Fragment>