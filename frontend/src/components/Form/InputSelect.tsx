import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function InputSelect({ register }: any) {
    const [bookCategory, setBookCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setBookCategory(event.target.value as string);
    };

    return (
        <Box sx={{ width: '70%' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Thể loại</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bookCategory}
                    label="Thể loại"
                    {...register('bookCategory')}
                    onChange={handleChange}
                >
                    <MenuItem value="Tiểu thuyết (Novel)">Tiểu thuyết (Novel)</MenuItem>
                    <MenuItem value="Khoa học viễn tưởng (Science Fiction)">
                        Khoa học viễn tưởng (Science Fiction)
                    </MenuItem>
                    <MenuItem value="Kỳ ảo (Fantasy)">Kỳ ảo (Fantasy)</MenuItem>
                    <MenuItem value="Trinh thám (Detective/Thriller)">
                        Trinh thám (Detective/Thriller)
                    </MenuItem>
                    <MenuItem value="Lãng mạn (Romance)">Lãng mạn (Romance)</MenuItem>
                    <MenuItem value="Kinh dị (Horror)">Kinh dị (Horror)</MenuItem>
                    <MenuItem value="Tiểu sử (Biography)">Tiểu sử (Biography)</MenuItem>
                    <MenuItem value="Tự truyện (Autobiography)">Tự truyện (Autobiography)</MenuItem>
                    <MenuItem value="Tiểu thuyết lịch sử (Historical Fiction)">
                        Tiểu thuyết lịch sử (Historical Fiction)
                    </MenuItem>
                    <MenuItem value="Sách chuyên khảo (Non-fiction)">Sách chuyên khảo (Non-fiction)</MenuItem>
                    <MenuItem value="Tự giúp (Self-help)">Tự giúp (Self-help)</MenuItem>
                    <MenuItem value="Triết học (Philosophy)">Triết học (Philosophy)</MenuItem>
                    <MenuItem value="Tâm lý học (Psychology)">Tâm lý học (Psychology)</MenuItem>
                    <MenuItem value="Kinh doanh (Business)">Kinh doanh (Business)</MenuItem>
                    <MenuItem value="Du lịch (Travel)">Du lịch (Travel)</MenuItem>
                    <MenuItem value="Sách nấu ăn (Cookbook)">Sách nấu ăn (Cookbook)</MenuItem>
                    <MenuItem value="Thơ (Poetry)">Thơ (Poetry)</MenuItem>
                    <MenuItem value="Kịch (Drama)">Kịch (Drama)</MenuItem>
                    <MenuItem value="Văn học thiếu nhi (Children's Literature)">
                        Văn học thiếu nhi (Children&apos;s Literature)
                    </MenuItem>
                    <MenuItem value="Nghệ thuật (Art)">Nghệ thuật (Art)</MenuItem>
                    <MenuItem value="Tôn giáo (Religion)">Tôn giáo (Religion)</MenuItem>
                    <MenuItem value="Văn học kỹ năng sống (Literature on Life Skills)">
                        Văn học kỹ năng sống (Literature on Life Skills)
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
