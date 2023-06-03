import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { Text, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PermissionsList = [
	{
		id: 1,
		permissionTitle: "دسترسی کامل",
		permissionContent:
			"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
	},
	{
		id: 2,
		permissionTitle: "دسترسی ویرایش",
		permissionContent:
			"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
	},
	{
		id: 3,
		permissionTitle: "دسترسی کامنت",
		permissionContent:
			"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
	},
	{
		id: 4,
		permissionTitle: "دسترسی مشاهده",
		permissionContent: "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
	},
];

// interface PermissionMenuProps {
//   selected: string;
//   setSelected: (a: string) => void;
// }

const PermissionMenu = () => {
	const [selected, setSelected] = useState("");

	return (
		<Menu>
			<MenuButton width="150px">
				<InputGroup>
					<Input
						height="27px"
						fontSize="12px"
						value={selected}
						placeholder="انتخاب کنید"
					/>
					<InputRightElement height="27px">
						<ChevronDownIcon />
					</InputRightElement>
				</InputGroup>
			</MenuButton>
			<MenuList width="250px" minWidth="250px">
				{PermissionsList.map((data) => (
					<MenuItem key={data.id}>
						<Stack onClick={() => setSelected(data.permissionTitle)}>
							<Text fontSize="12px" fontWeight="600" pr="5px">
								{data.permissionTitle}
							</Text>
							<Text pr="5px">{data.permissionContent}</Text>
						</Stack>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PermissionMenu;
