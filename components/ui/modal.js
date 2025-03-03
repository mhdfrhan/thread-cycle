import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, onConfirm, title, children, type = "info" }) => {
	const getIcon = () => {
		switch (type) {
			case "success":
				return (
					<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				);
			case "warning":
				return (
					<svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
				);
			default:
				return (
					<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose} // Changed from onClose to just close modal
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
					>
						<div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									{getIcon()}
									<h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
										{title}
									</h3>
								</div>
								<div className="text-neutral-600 dark:text-neutral-400">
									{children}
								</div>
							</div>
							<div className="p-4 bg-neutral-50 dark:bg-neutral-900 flex justify-end gap-3">
								{type === "warning" && (
									<button
										onClick={onClose}
										className="px-4 py-2 text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
									>
										Batal
									</button>
								)}
								{onConfirm ? (
									<button
										onClick={onConfirm}
										className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
									>
										Ya, Lanjutkan
									</button>
								) : (
									<button
										onClick={onClose}
										className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
									>
										Tutup
									</button>
								)}
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Modal;