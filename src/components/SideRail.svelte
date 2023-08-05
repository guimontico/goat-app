<script>
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownItem,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	import 'iconify-icon';

	$: activeUrl = $page.url.pathname;
</script>

<div class="h-modal p-4 divide-x">
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard" href="/dashboard" active={activeUrl === '/dashboard'}>
					<svelte:fragment slot="icon">
						<iconify-icon icon="ion:home" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="Finance">
					<svelte:fragment slot="icon">
						<iconify-icon icon="mdi:finance" />
					</svelte:fragment>
					<div class="ml-8">
						<SidebarDropdownItem
							label="Income"
							href="/finance/income"
							active={activeUrl === '/finance/income'}
						/>
						<SidebarDropdownItem
							label="Expenses"
							href="/finance/expenses"
							active={activeUrl === '/finance/expenses'}
						/>
						<SidebarDropdownItem
							label="Sales"
							href="/finance/sales"
							active={activeUrl === '/finance/sales'}
						/>
						<SidebarDropdownItem
							label="Billing"
							href="/finance/billing"
							active={activeUrl === '/finance/billing'}
						/>
						<SidebarDropdownItem
							label="Budget"
							href="/finance/budget"
							active={activeUrl === '/finance/budget'}
						/>
						<SidebarDropdownItem
							label="Invoice"
							href="/finance/invoice"
							active={activeUrl === '/finance/invoice'}
						/>
					</div>
				</SidebarDropdownWrapper>
				<SidebarItem
					label="Inventory"
					{spanClass}
					href="/inventory"
					active={activeUrl === '/inventory'}
				>
					<svelte:fragment slot="icon">
						<iconify-icon icon="ic:round-inventory" />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="Logistic"
					{spanClass}
					href="/logistic"
					active={activeUrl === '/logistic'}
				>
					<svelte:fragment slot="icon">
						<iconify-icon icon="mingcute:truck-line" />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Calender" href="/calender" active={activeUrl === '/calender'}>
					<svelte:fragment slot="icon">
						<iconify-icon icon="uil:calender" />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>
