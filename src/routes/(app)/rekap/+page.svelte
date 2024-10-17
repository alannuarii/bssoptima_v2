<script>
	import { date, getYearMonth } from '../../../lib/js/date';
	import { page } from '$app/stores';

	$: searchParam = $page.url.search;
	$: valueSearch = searchParam.length > 0 ? searchParam.slice(7) : getYearMonth();

	let randomNumber = (Math.random() * (40 - 20) + 20).toFixed(2);

	let items = Array.from({ length: 31 }, (_, i) => i + 1);

	// $: console.log(searchParam);
</script>

<section>
	<div>
		<h1 class="mb-4 text-center">REKAP DATA</h1>
	</div>
	<div class="row mb-2 px-2">
		<div class="col-6">
			<div class="row d-flex align-items-center">
				<label for="inputMonth" class="col-sm-3 col-form-label">Pilih bulan</label>
				<div class="col-sm-7">
					<form>
						<input
							type="month"
							class="form-control form-control-sm"
							bind:value={valueSearch}
							name="bulan"
							onchange="this.form.submit()"
						/>
					</form>
				</div>
			</div>
		</div>
		<div class="col-4 d-flex align-items-center justify-content-end">
			<h6>DATA BULAN JULI 2023</h6>
		</div>
	</div>
	<table class="table table-bordered text-center bg-white">
		<thead>
			<tr>
				<th class="align-middle" scope="col">NO</th>
				<th class="align-middle" scope="col">TANGGAL</th>
				<th class="align-middle" scope="col"
					><div class="d-flex flex-column justify-content-center align-items-center">
						KEBUTUHAN %DOD
						<p>(%)</p>
					</div></th
				>
				<th class="align-middle" scope="col"
					><div class="d-flex flex-column justify-content-center align-items-center">
						SETTING C-RATE
						<p>(C)</p>
					</div></th
				>
				<th class="align-middle" scope="col"
					><div class="d-flex flex-column justify-content-center align-items-center">
						SETTING RAMP RATE
						<p>(kW/Hz)</p>
					</div></th
				>
				<th class="align-middle" scope="col"
					><div class="d-flex flex-column justify-content-center align-items-center">
						SETTING MAX BEBAN BSS
						<p>(kW)</p>
					</div></th
				>
			</tr>
		</thead>
		<tbody>
			{#each items as item, index}
				<tr>
					<td>{index + 1}</td>
					<td>{date(`2024-10-${index + 1}`)}</td>
					<td>{(Math.random() * (40 - 20) + 20).toFixed(2)}</td>
					<td>0.20</td>
					<td>10.00</td>
					<td>{(Math.random() * (9000 - 5000) + 4000).toFixed(2)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	thead {
		font-size: 14px;
	}
	tbody {
		font-size: 12px;
	}
	thead p {
		margin: 0px;
		font-weight: 400;
	}
	label {
		font-size: 1vw;
	}
	h6 {
		margin: 0px;
		font-weight: 700;
	}
</style>
