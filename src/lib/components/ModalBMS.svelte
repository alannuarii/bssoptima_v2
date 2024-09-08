<script>
	export let bms;
	const cells1 = [
		bms.cell1,
		bms.cell2,
		bms.cell3,
		bms.cell4,
		bms.cell5,
		bms.cell6,
		bms.cell7,
		bms.cell8
	];

	const cells2 = [
		bms.cell9,
		bms.cell10,
		bms.cell11,
		bms.cell12,
		bms.cell13,
		bms.cell14,
		bms.cell15,
		bms.cell16
	];

	const data1 = [
		{ label: 'MAX', unit: 'V', data: bms.min_volt },
		{ label: 'MIN', unit: 'V', data: bms.max_volt },
		{ label: 'AVERAGE', unit: 'V', data: bms.avg_volt },
		{ label: 'TOTAL', unit: 'V', data: bms.voltage }
	];

	const data2 = [
		{ label: 'TEMPERATURE', unit: 'degC', data: bms.temperature },
		{ label: 'SOC', unit: '%', data: bms.soc },
		{ label: 'CAPACITY', unit: '%', data: bms.capacity },
		{ label: 'RUL', unit: 'Cycles', data: bms.rul }
	];
</script>

<div
	class="modal fade"
	id="BMS{bms.id_bms}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5 fw-bolder" id="exampleModalLabel">DETAIL BMS {bms.id_bms}</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-6">
						{#each cells1 as cell, index}
							<div class="mb-2 row">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="title col-5 col-form-label col-form-label-sm"
									>Battery Cell {index + 1}</label
								>
								<div class="col-4">
									<input
										type="text"
										class="form-control form-control-sm text-center"
										value={cell}
										disabled
									/>
								</div>
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="col-1 col-form-label col-form-label-sm">V</label>
							</div>
						{/each}
					</div>
					<div class="col-6">
						{#each cells2 as cell, index}
							<div class="mb-2 row">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="title col-5 col-form-label col-form-label-sm"
									>Battery Cell {index + 9}</label
								>
								<div class="col-4">
									<input
										type="text"
										class="form-control form-control-sm text-center"
										value={cell}
										disabled
									/>
								</div>
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="col-1 col-form-label col-form-label-sm">V</label>
							</div>
						{/each}
					</div>
				</div>
				<hr />
				<div class="row">
					<div class="col-6">
						{#each data1 as data}
							<div class="mb-2 row">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="title col-5 col-form-label col-form-label-sm">{data.label}</label>
								<div class="col-4">
									<input
										type="text"
										class="form-control form-control-sm text-center"
										value={data.data}
										disabled
									/>
								</div>
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="col-1 col-form-label col-form-label-sm">{data.unit}</label>
							</div>
						{/each}
					</div>
					<div class="col-6">
						{#each data2 as data}
							<div class="mb-2 row">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="title col-5 col-form-label col-form-label-sm">{data.label}</label>
								<div class="col-4">
									<input
										type="text"
										class="form-control form-control-sm text-center"
										value={data.data}
										disabled
									/>
								</div>
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="col-1 col-form-label col-form-label-sm">{data.unit}</label>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
		font-weight: 700;
	}
</style>
