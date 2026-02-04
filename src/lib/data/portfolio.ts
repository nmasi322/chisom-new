import Access from '$lib/assets/portfolio/Access Pan African Awards.pdf';
import Amstel from '$lib/assets/portfolio/Amstel Malta Article.pdf';
import BookReview from "$lib/assets/portfolio/Book Review_ Writer's Postcards (edited).pdf";
import EnuguFood from '$lib/assets/portfolio/Enugu Food Meets Fashion.pdf';
import Fidelity from '$lib/assets/portfolio/Fidelity corporate banking.pdf';
import Mtn from '$lib/assets/portfolio/MTN Article.pdf';
import Personal from '$lib/assets/portfolio/Personal statement.pdf';
import MediaMoney from '$lib/assets/portfolio/THE MEDIA MONEY OF LAGOS.pdf';
import ViacomCBS from '$lib/assets/portfolio/Thought leadership.pdf';
import Trendupp from '$lib/assets/portfolio/Trendupp Awards Official Release.pdf';
import Trophy from '$lib/assets/portfolio/Trophy Episode 7.pdf';
import { BookOpenTextIcon, MicVocalIcon, NewspaperIcon, PenToolIcon } from '@lucide/svelte';

export const portfolioItems = [
	{
		title: 'Winner 2025 Fosseway Writers Flash Fiction Competition',
		url: 'https://fossewaywriters.com/2025/09/07/flash-fiction-competition-2025-results/',
		icon: PenToolIcon
	},
	{
		title: 'Short Story - ịgbachi ṅkịtị',
		url: 'https://kalaharireview.com/ịgbachi-ṅkịtị-6a057dfb11a5',
		icon: PenToolIcon
	},
	{
		title: 'Book Review',
		url: 'https://www.lincolnreview.org/issue5',
		icon: BookOpenTextIcon
	},
	{
		title: 'Managing Editor - The Lincoln Review',
		url: 'https://www.lincolnreview.org/',
		icon: PenToolIcon
	},
	{
		title: 'Featured writer on Bellanaija.',
		url: 'https://www.bellanaija.com/author/chisom-winifred',
		icon: PenToolIcon
	},
	{
		title: 'Book Review',
		url: BookReview,
		icon: BookOpenTextIcon
	},
	{
		title: 'Beauty editor at Glam Africa magazine.',
		url: 'https://glamafrica.com/author/chisom-winifred',
		icon: PenToolIcon
	},
	{
		title: 'Featured article for Nigerian Multinational Commercial Bank, Access Bank PLC.',
		url: Access,
		icon: NewspaperIcon
	},
	{
		title: 'Featured article for Fidelity Bank Plc, a commercial bank in Nigeria.',
		url: Fidelity,
		icon: NewspaperIcon
	},
	{
		title: 'Thought leadership article for ViacomCBS Networks Africa.',
		url: ViacomCBS,
		icon: NewspaperIcon
	},
	{
		title: 'Promotion Article for Trophy Extra Special Band Season 2.',
		url: Trophy,
		icon: NewspaperIcon
	},
	{
		title: 'Personal statement for international chef Soliat Bada.',
		url: Personal,
		icon: MicVocalIcon
	},
	{
		title:
			'Editor for the first edition of Enugu Food Meets Fashion Magazine sponsored by Golden Penny Foods and Milo.',
		url: EnuguFood,
		icon: PenToolIcon
	},
	{
		title: 'Speech for group CEO RED Media Africa Adebola Williams.',
		url: MediaMoney,
		icon: MicVocalIcon
	},
	{
		title:
			'Press article for the maiden edition of Trendupp Africa; Nigeria’s First Influencers & Content Creators Award.',
		url: Trendupp,
		icon: NewspaperIcon
	},
	{
		title: 'Press article for MTN Nigeria.',
		url: Mtn,
		icon: NewspaperIcon
	},
	{
		title: 'Press article for international malt brand, Amstel Malta.',
		url: Amstel,
		icon: NewspaperIcon
	},
	{
		title: 'Sales article for London based beauty brand, Loveshea skincare.',
		url: 'https://www.hayat.media/loveshea-skincare-has-all-you-need-for-healthy-youthful-skin/',
		icon: NewspaperIcon
	},
	{
		title: 'Sales article for London based beauty brand, Mia Lueur.',
		url: 'https://www.hayat.media/glow-and-grow-with-skincare-products-from-mia-lueur-organic-support/',
		icon: NewspaperIcon
	},
	{
		title: "Blog post for Nigeria's Leading Real Estate Group Geohomes Housing.",
		url: 'https://geohomesgroup.com/content/33-are-you-a-real-estate-artisan-heres-how-geohomes-can-ensure-your-next-payday',
		icon: NewspaperIcon
	},
	{
		title: "Blog post for Nigeria's Leading Real Estate Group Geohomes Housing.",
		url: 'https://geohomesgroup.com/content/34-investing-in-properties-the-smart-way',
		icon: NewspaperIcon
	}
];
