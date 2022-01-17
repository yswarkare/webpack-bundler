import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Checkboxes = ({ data, selected = [], getSelected = () => {}, ...restProps }) => {
	return (
		<>
			{data?.map((item, index) => {
				return (
					<Checkbox
						label={item}
						value={item}
						key={index}
						checked={selected?.includes(item)}
						onChange={(e) => {
							e.target.checked === true
								? getSelected([...selected, item])
								: e.target.checked === false
								? selected.splice(selected.indexOf(item), 1) && getSelected([...selected])
								: getSelected(selected);
						}}
						{...restProps}
					></Checkbox>
				);
			})}
		</>
	);
};

export default Checkboxes;
