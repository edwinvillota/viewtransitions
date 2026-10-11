import type React from 'react';
import type { ComponentProps, PropsWithChildren } from 'react';
import { Topbar } from '@/components/molecules';

interface MainTemplateRootProps extends PropsWithChildren {}
interface MainTemplateHeaderProps extends ComponentProps<typeof Topbar> {}
interface MainTemplateContentProps extends PropsWithChildren {}
interface MainTemplateFooterProps extends PropsWithChildren {}

interface MainTemplateComponent {
	Root: React.ComponentType<MainTemplateRootProps>;
	Header: React.ComponentType<MainTemplateHeaderProps>;
	Content: React.ComponentType<MainTemplateContentProps>;
	Footer: React.ComponentType<MainTemplateFooterProps>;
}

const MainTemplateRoot: React.FC<MainTemplateRootProps> = ({ children }) => {
	return <div className="flex flex-col min-h-dvh">{children}</div>;
};

const MainTemplateHeader: React.FC<MainTemplateHeaderProps> = (props) => {
	return (
		<header className="sticky top-0 z-10 bg-(--color-canvas)">
			<Topbar {...props} />
		</header>
	);
};

const MainTemplateContent: React.FC<MainTemplateContentProps> = ({
	children,
}) => {
	return (
		<main className="flex flex-1 flex-col gap-5 px-5 pb-28">{children}</main>
	);
};

const MainTemplateFooter: React.FC<MainTemplateFooterProps> = ({
	children,
}) => {
	return <footer className="fixed inset-x-0 bottom-0 z-10">{children}</footer>;
};

export const MainTemplate: MainTemplateComponent = {
	Root: MainTemplateRoot,
	Header: MainTemplateHeader,
	Content: MainTemplateContent,
	Footer: MainTemplateFooter,
};
