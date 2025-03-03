"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		router.push("/");
		setIsLoading(false);
	};

	return (
		<div className="min-h-screen grid lg:grid-cols-2">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				className="flex items-center justify-center p-8 lg:p-16"
			>
				<div className="w-full max-w-md">
					<div className="text-center lg:text-left mb-8">
						<Link href="/" className="inline-block mb-8">
							<Image
								src="/img/logo.svg"
								alt="ThreadCycle"
								width={150}
								height={40}
								className="hidden dark:block"
							/>
							<Image
								src="/img/logo-dark.svg"
								alt="ThreadCycle"
								width={150}
								height={40}
								className="dark:hidden"
							/>
						</Link>
						<h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
							Selamat Datang Kembali
						</h1>
						<p className="text-neutral-600 dark:text-neutral-400">
							Masuk ke akun Anda untuk melanjutkan ke platform ThreadCycle
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
								htmlFor="email">
								Email
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</div>
								<input
									id="email"
									type="email"
									placeholder="nama@email.com"
									className="pl-10 w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent dark:text-white transition-all duration-200"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
								htmlFor="password">
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<input
									id="password"
									type="password"
									placeholder="Minimal 8 karakter"
									className="pl-10 w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-600 focus:border-transparent dark:text-white transition-all duration-200"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<label className="flex items-center cursor-pointer">
								<input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 focus:ring-orange-500 border-neutral-300 rounded duration-150" />
								<span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400 select-none">Ingat saya</span>
							</label>
							<Link href="/auth/forgot-password"
								className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
								Lupa password?
							</Link>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isLoading ? (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="flex items-center justify-center"
								>
									<div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
									Memproses...
								</motion.div>
							) : (
								"Masuk"
							)}
						</button>

						<div className="relative my-8">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white dark:bg-neutral-950 text-neutral-500">Atau masuk dengan</span>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<button
								type="button"
								className="flex items-center justify-center px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
							>
								<Image src="/img/google.webp" alt="Google" width={100} height={100} />
							</button>
							<button
								type="button"
								className="flex items-center justify-center px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
							>
								<Image src="/img/facebook.png" alt="Facebook" width={100} height={100} />
							</button>
						</div>

						<p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
							Belum punya akun?{" "}
							<Link href="/auth/register"
								className="font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
								Daftar sekarang
							</Link>
						</p>
					</form>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				className="hidden lg:block relative"
			>
				<Image
					src="https://images.unsplash.com/photo-1517502166878-35c93a0072f0?q=80&w=2462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Login Background"
					fill
					className="object-cover"
					priority
				/>
			</motion.div>
		</div>
	);
};

export default Login;