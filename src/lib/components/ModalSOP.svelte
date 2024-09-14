<script>
	import sopBSSOpt from '../../lib/pdf/SOP-BSSOptima.pdf';

	const modepdf = sopBSSOpt;
</script>

<div
	class="modal fade"
	id="modalSOP"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">SOP Aplikasi BSS Optima</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<!-- svelte-ignore a11y-missing-attribute -->
				<object type="application/pdf" data={modepdf} width="100%" height="530px">
					<p>
						Maaf, browser Anda tidak mendukung tampilan PDF. Silakan unduh file untuk melihatnya.
					</p>
				</object>
			</div>
		</div>
	</div>
</div>
