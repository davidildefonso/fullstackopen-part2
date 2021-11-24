import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const Course = ({course}) =>  (
				<>
					<Header name={course.name} />
					<Content parts={course.parts}  />
					<Total parts={course.parts}  />
				</>
		);


export default Course;



