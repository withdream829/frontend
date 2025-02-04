import Link from "next/link";
import classes from "./footer.module.css";
import DiscordIcon from "@/components/atoms/discord-icon";
import GitHubIcon from "@/components/atoms/github-icon";
import TwitterIcon from "@/components/atoms/twitter-icon";
import { externalLinks } from "@/config";

export default function Footer() {
	return (
		<footer className="dark:bg-black shadow-inner dark:text-white">
			<div className="container mx-auto px-[5rem] py-[5rem]">
				<div className="flex justify-between flex-col md:flex-row  items-center md:items-start gap-[3rem] md:gap-[1rem] text-left">
					<div className="flex flex-col lg:w-1/2">
						<Link className={classes.brand} href="/">
							<div className="flex flex-row items-center">
								<div className={classes.logo}>
									<img style={{ width: "auto", height: "10rem" }} src="/svg/commune.svg" alt="My Site Logo" />
								</div>
								<b className="text-[2rem] font-bold footer-main hover:underline">Commune AI</b>
							</div>
						</Link>
					</div>
					<div className="flex flex-col gap-3 relative">
						<p className="text-[22px] font-bold footer-main">📚 Docs</p>
						<a className="text-[1.5rem] font-bold footer-main hover:underline" href="/docs/introduction">
							Introduction
						</a>
						<a className="text-[1.5rem] font-bold footer-main hover:underline" href="/docs/setup-commune">
							Installation
 						</a>
					</div>
					<div className="flex flex-col gap-3 items-center relative">
						<p className="text-[22px] font-bold footer-main">🔗 Community</p>
						<a
							href="https://discord.gg/communeai"
							target="_blank"
							rel="noopener noreferrer"
							className={classes.item}
						>
							<DiscordIcon />
						</a>
						<a
							href="https://twitter.com/communeaidotorg"
							target="_blank"
							rel="noopener noreferrer"
							className={classes.link}
						>
							<TwitterIcon />
						</a>
						<a
							href="https://github.com/commune-ai"
							target="_blank"
							rel="noopener noreferrer"
							className={classes.link}
						>
							<GitHubIcon />
						</a>
					</div>
					<div className="flex flex-col gap-3 relative">
						<p className="text-[22px] font-bold footer-main">➕ More</p>
						<a
							href={externalLinks.whitepaper}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[1.5rem] font-bold footer-main hover:underline"
						>
							📄 Whitepaper
						</a>
					</div>
				</div>
			</div>
			<p className="text-[16px] font-medium dark:text-white text-center mb-[5rem] px-3">
				Copyright © {new Date().getFullYear()} Commune, Inc. Built with Docusaurus.
			</p>
		</footer>
	);
}
