<script>
	import { getToday, convertDate } from '../../lib/js/date';
	import { units } from '../../lib/js/units';
	import { onMount } from 'svelte';
	import bssOn from '../../lib/img/bss-on.png';

	export let data;
	const settings = data.data4.data.length > 0 ? data.data4.data : [];

	let it1Data = [];
	let it2Data = [];
	let error = "Loading . . .";

	const isDataAvailable = (data) => data && data.length > 0;

	const sortFields = ['Active Power', 'Reactive Power', 'Voltage', 'Current'];

	const sortData = (data) => {
		return data.sort((a, b) => sortFields.indexOf(a._field) - sortFields.indexOf(b._field));
	};

	const fetchData = async () => {
		try {
			// Fetch data from both APIs
			const it1Res = await fetch('/api/it1');
			const it2Res = await fetch('/api/it2');

			// Check if both requests are primaryful
			if (!it1Res.ok || !it2Res.ok) {
				throw new Error('Failed to fetch data');
			}

			// Parse both JSON responses
			const it1 = await it1Res.json();
			const it2 = await it2Res.json();

			// Update the weatherData and dg7Data arrays
			it1Data = sortData(it1);
			it2Data = sortData(it2);
		} catch (err) {
			error = err.message;
		}
	};

	onMount(() => {
		fetchData();

		const interval = setInterval(fetchData, 5000);

		return () => clearInterval(interval);
	});
</script>

<section>
	<div class="row">
		<div class="col-8">
			<div class="border rounded-5 ps-5 pt-3 pb-4 shadow bg-white">
				<div class="text-center mb-3 setting">
					<h3 class="">REKOMENDASI SETTING BSS</h3>
					<h4 class="">{convertDate(getToday())}</h4>
				</div>
				{#if settings.length === 0}
					<div class="text-center kosong d-flex justify-content-center align-items-center">
						<div class="">
							<h3 class="mb-3">DATA KOSONG</h3>
							<a class="btn" href="/input/irradiance">Input Data</a>
						</div>
					</div>
				{:else}
					<div class="mb-4">
						<h5 class="mb-3">Forecast Produksi</h5>
						<div class="mb-2 row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Total Produksi PV</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={settings[0].prod_pv.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
						<div class="mb-2 row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Kebutuhan Smoothing BSS</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={settings[0].smooth_bss.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
						<div class="row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Total Produksi PV + BSS</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={settings[0].total_pv_bss.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
					</div>
					<div class="">
						<h5 class="mb-2">Rekomendasi Setting Parameter</h5>
						<div class="row mb-2">
							<div class="col-2 offset-5 text-center feeder">BSS Feeder 1</div>
							<div class="col-2 offset-1 text-center feeder">BSS Feeder 2</div>
						</div>
						<div class="mb-2 row">
							<label for="inputPassword" class="col-4 col-form-label">Kebutuhan %DoD</label>
							<div class="col-2 offset-1">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].dod / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">%</label>
							<div class="col-2">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].dod / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">%</label>
						</div>
						<div class="mb-2 row">
							<label for="inputPassword" class="col-4 col-form-label">Setting C-rate</label>
							<div class="col-2 offset-1">
								<input
									type="text"
									class="form-control text-center"
									value={settings[0].crate / 2}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">C</label>
							<div class="col-2">
								<input
									type="text"
									class="form-control text-center"
									value={settings[0].crate / 2}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">C</label>
						</div>
						<div class="mb-2 row">
							<label for="inputPassword" class="col-4 col-form-label">Setting Ramp Rate</label>
							<div class="col-2 offset-1">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].ramprate / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">kW/Hz</label>
							<div class="col-2">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].ramprate / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">kW/Hz</label>
						</div>
						<div class="row">
							<label for="inputPassword" class="col-4 col-form-label">Setting Max Beban BSS</label>
							<div class="col-2 offset-1">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].maxbss / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">kW</label>
							<div class="col-2">
								<input
									type="text"
									class="form-control text-center"
									value={(settings[0].maxbss / 2).toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-1 col-form-label">kW</label>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="col-4">
			<div class="border rounded-5 shadow py-4 bg-white">
				<div class="text-center mb-3 bss">
					<h3 class="">MONITORING BSS</h3>
				</div>
				{#if isDataAvailable(it1Data) && isDataAvailable(it2Data)}
					<div class="px-2 text-center bss">
						<div class="row gx-0">
							<div class="col-6">
								<div class="py-2 d-flex flex-column justify-content-center align-items-center">
									<img src={bssOn} alt="" class="mb-1" />
									<h5 class="text-dark mb-3">BSS Feeder 1</h5>
									<ul class="list-group">
										{#each it1Data as it}
											<li class="list-group-item">
												<p>{it._field}</p>
												<h6>{it._value} {units(it._field)}</h6>
											</li>
										{/each}
										{#if it1Data[0]?._value > 0}
											<li class="list-group-item text-danger"><h6>Discharging</h6></li>
										{:else if it1Data[0]?._value <= -1}
											<li class="list-group-item text-primary"><h6>Charging</h6></li>
										{:else}
											<h5 class="card-title me-2">-</h5>
										{/if}
									</ul>
									<div class="text-center mt-2">
										<a href="/output/bss1">Detail <i class="bi-arrow-right-circle" /></a>
									</div>
								</div>
							</div>
							<div class="col-6">
								<div class="py-2 d-flex flex-column justify-content-center align-items-center">
									<img src={bssOn} alt="" class="mb-1" />
									<h5 class="text-dark mb-3">BSS Feeder 2</h5>
									<ul class="list-group">
										{#each it2Data as it}
											<li class="list-group-item">
												<p>{it._field}</p>
												<h6>{it._value} {units(it._field)}</h6>
											</li>
										{/each}
										{#if it2Data[0]?._value > 0}
											<li class="list-group-item text-danger"><h6>Discharging</h6></li>
										{:else if it2Data[0]?._value <= -1}
											<li class="list-group-item text-primary"><h6>Charging</h6></li>
										{:else}
											<h5 class="card-title me-2">-</h5>
										{/if}
									</ul>
									<div class="text-center mt-2">
										<a href="/output/bss2">Detail <i class="bi-arrow-right-circle" /></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<p class="text-center">{error}</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* .btn {
		background-color: #43a6a3;
		border-color: transparent !important;
		color: #ffffff;
		font-size: 10px;
	}
	.btn:hover {
		background-color: #43a6a3df;
	} */
	h5,
	.feeder {
		font-weight: 700;
	}
	.setting h3 {
		margin: 0;
		font-weight: 700;
		color: #43a6a3;
	}
	.setting h4 {
		margin: 0;
		font-size: 23px;
		color: #43a6a3;
	}
	.bss h3 {
		margin: 0;
		font-weight: 700;
		color: #43a6a3;
		font-size: 20px;
	}
	img {
		width: 30%;
	}
	.kosong {
		height: 50vh;
	}
	h3 {
		font-weight: 900;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent;
		color: #ffffff;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	.bss h5 {
		font-weight: 700;
		font-size: 15px;
	}
	.bss h6 {
		margin: 0px;
		font-weight: 500;
		font-size: 13px;
	}
	.bss p {
		margin: 0px;
		font-weight: 400;
		font-size: 12px;
		color: #2f3e46;
	}
	.bss a {
		text-decoration: none;
		font-weight: 600;
		font-size: 13px;
		
	}
</style>
