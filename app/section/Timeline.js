import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutTimeline() {
	const data = [
		{
			title: "2022",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200  font-normal mb-8">
						ThreadCycle didirikan dengan visi mengubah cara masyarakat memandang fashion berkelanjutan.
						Dimulai dari sebuah komunitas kecil yang peduli terhadap limbah tekstil.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Pendirian ThreadCycle"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Komunitas Awal"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200  font-normal mb-8">
						Tahun pertumbuhan yang luar biasa bagi ThreadCycle. Platform kami berkembang pesat
						dan berhasil mencapai beberapa milestone penting.
					</p>
					<div className="mb-8">
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Mencapai 10,000+ pengguna aktif
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Ekspansi ke 15 kota di Indonesia
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Menyelamatkan 5,000+ kg limbah tekstil
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Peluncuran sistem poin penukaran
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Pertumbuhan Platform"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://images.unsplash.com/photo-1555043722-4523972f07ee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Ekspansi Kota"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
		{
			title: "2024",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200  font-normal mb-4">
						Inovasi dan pengembangan berkelanjutan menjadi fokus utama kami di tahun 2024
					</p>
					<div className="mb-8">
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Peluncuran platform edukasi
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Forum komunitas yang lebih interaktif
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Program kemitraan dengan brand lokal
						</div>
						<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
							✅ Mobile app ThreadCycle
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<Image
							src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Platform Edukasi"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
						<Image
							src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Mobile App"
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		},
	];
	return (
		(<div className="w-full">
			<Timeline data={data} />
		</div>)
	);
}
