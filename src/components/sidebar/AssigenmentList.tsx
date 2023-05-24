import {
	Accordion, Stack,
} from "@chakra-ui/react";

import {
	ColorPalletIcon,
	EditIcon,
	ShareLinkIcon,
	SimplePlusIcon,
	TrashIcon,
} from "../../components/Icons";
import AssignmentItem from "./AssignmentItem";
import { Assigenment } from "../../data/assignment";
const modalData = [
	{ id: 1, title: "ساختن پروژه جدید", icon: SimplePlusIcon },
	{ id: 2, title: "ویرایش نام ورک‌اسپیس", icon: EditIcon },
	{ id: 3, title: "ویرایش رنگ", icon: ColorPalletIcon },
	{ id: 4, title: "کپی لینک", icon: ShareLinkIcon },
	{ id: 5, title: "حذف", icon: TrashIcon },
];
export const AssignmentList = () => {

	return (
		<>
			<Accordion allowToggle>
				<Stack gap="12px">
					{Assigenment.map((item) => (
						<AssignmentItem
							key={item.id}
							id={item.id}
							color={item.color}
							title={item.title}
							hasSub={item?.hasSub}
							subAss={item.subAss}
						/>
					))}
				</Stack>
			</Accordion>
			{/* <MoreModal isShow={isOpen} onCloseModal={onCloseModalHandler} /> */}
		</>
	);
};
