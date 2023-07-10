import { useEffect, useState } from 'react';
import ProductService from './services/ProductService';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Products from './pages/Products';

function App() {
	return (
		<div>
			<Navbar/>
			<Outlet />
			{/* 
			{data.map((product, i) => {
				return <Card key={i} item={product} />;
			})} */}
		</div>
	);
}

export default App;
