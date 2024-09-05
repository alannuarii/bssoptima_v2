<script>
	import icon from '$lib/img/icon.png';
	import pnp from '$lib/img/np.png';
</script>

<div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3">
	<div class="d-flex justify-content-center mb-3">
		<img src={icon} class="bss img-fluid" alt="" />
	</div>
	<ul class="nav nav-pills flex-column mb-auto">
		<li class="nav-item">
			<a href="/" class="nav-link text-secondary" aria-current="page"
				><i class="bi-house text-primary p-1 me-2" /> Home
			</a>
		</li>
		<li class="nav-item">
			<a href="/input/irradiance" class="nav-link text-secondary" aria-current="page"
				><i class="bi-sun p-1 me-2" /> Input Irradiance
			</a>
		</li>
		<li class="nav-item">
			<a href="/output/bss1" class="nav-link text-secondary" aria-current="page"
				><i class="bi-battery-full p-1 me-2" /> BSS Feeder 1
			</a>
		</li>
		<li class="nav-item">
			<a href="/output/bss2" class="nav-link text-secondary" aria-current="page"
				><i class="bi-battery-full p-1 me-2" /> BSS Feeder 2
			</a>
		</li>
		<li class="nav-item">
			<a href="/optimization" class="nav-link text-secondary" aria-current="page"
				><i class="bi-battery-charging text-primary p-1 me-2" /> Optimization Result
			</a>
		</li>
	</ul>
	<div class="powered position-absolute bottom-0 start-0 mb-3 ms-3">
		<img src={pnp} class="img-fluid pnp mb-1" alt="" />
	</div>
</div>

<style>
	#sidebar {
		color: #ffffff;
		width: 100%;
		height: 100vh;
		background-color: #43a6a3;
		background-image: url('../img/bolt.png');
		background-position: left;
		background-repeat: no-repeat;
		background-size: 180%;
		border-radius: 0 0 150px 0;
	}
	/* #43a6a3 */
	a {
		text-decoration: none;
		color: #ffffff !important;
	}
	.nav-item {
		cursor: pointer;
	}
	a:hover {
		color: #000 !important;
	}
	.bss {
		height: 100px;
	}
	.pnp {
		width: 10%;
	}
	i,
	.nav-link {
		color: #ffffff !important;
		font-weight: 300;
		padding: 10px 10px;
		font-size: 1vw;
	}
</style>
