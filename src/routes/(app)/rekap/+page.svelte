<script>
	import { date, getYearMonth, yearMonthID } from '../../../lib/js/date';
	import { page } from '$app/stores';

	export let data;

	const settings = data.data.data.length > 0 ? data.data.data : [];

	$: searchParam = $page.url.search;
	$: valueSearch = searchParam.length > 0 ? searchParam.slice(7) : getYearMonth();

	$: dataBulan = yearMonthID(valueSearch);
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
		<div class="col-5 d-flex align-items-center justify-content-end">
			<h6>DATA BULAN {dataBulan.toUpperCase()}</h6>
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
			{#each settings as set, index}
				<tr>
					<td>{index + 1}</td>
					<td>{date(set.tanggal)}</td>
					<td>{set.dod.toFixed(2)}</td>
					<td>{set.crate}</td>
					<td>{(set.ramprate).toFixed(0)}</td>
					<td>{(set.maxbss).toFixed(0)}</td>
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
