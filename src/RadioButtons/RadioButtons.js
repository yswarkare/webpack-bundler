import React from 'react';
import RadioButton from '../RadioButton/RadioButton';

const Radiobuttons = ({ data, selected, ...restProps }) => {
	return (
		<>
			{data?.map((item, index) => {
				return (
					<RadioButton
						label={item}
						value={item}
						key={index}
						checked={selected === item}
						{...restProps}
					></RadioButton>
				);
			})}
		</>
	);
};

export default Radiobuttons;
