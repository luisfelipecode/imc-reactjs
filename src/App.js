import { useState } from 'react';
import './App.css';

function App() {
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');

	const [mensagem, setMensagem] = useState('Informe seu peso e altura');
	function calcularImc() {
		const alt = altura / 100;
		const imc = peso / (alt * alt);

		if (imc < 18.6) {
			setMensagem(`Abaixo do peso,seu imc é: ${imc.toFixed(2)}`);
		} else if (imc >= 18.6 && imc < 24.9) {
			setMensagem(`Peso normal, seu imc é: ${imc.toFixed(2)}`);
		} else if (imc >= 24.9 && imc < 34.9) {
			setMensagem(`Sobrepeso, seu imc é: ${imc.toFixed(2)}`);
		} else if (imc > 34.9) {
			setMensagem(`Cuidado obesidade!, seu imc é: ${imc.toFixed(2)}`);
		}
	}

	return (
		<div className="app">
			<h1>Calculadora IMC</h1>
			<span>calculo de IMC</span>

			<div className="area-input">
				<input
					type="number"
					placeholder="Digite seu peso"
					value={peso}
					onChange={(e) => setPeso(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Digite sua altura"
					value={altura}
					onChange={(e) => setAltura(e.target.value)}
				/>
				<button onClick={calcularImc}>Calcular</button>
			</div>
			<h2>{mensagem}</h2>
		</div>
	);
}
export default App;
