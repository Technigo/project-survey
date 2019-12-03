const funMeter = () => {
if (fun === 1) {
<p>we really want to do this?</p>;
}
if (fun === 2) {
setFun('We are gonna have a drag');
}
if (fun === 3) {
setFun('Dont forget there is work tomorrow');
}
if (fun === 4) {
setFun('Now we are talking, wohooo');
}
if (fun === 5) {
setFun('We are going to have the best night ever!!!');
}
};

     Choose something to drink while you
    						are at it!

    						<div className='alignment'>
    						{drink.map(options => (
    							<label className='select'>
    								<input
    									key={options}
    									type='checkbox'
    									value={options}
    									onChange={event => setDrinks(event.target.value)}
    									checked={drinks === options}
    								/>
    								<span className='check-label'>{options}</span>
    							</label>
    						))}
    					</div>
