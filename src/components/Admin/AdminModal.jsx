import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { ReactComponent as ImageUploadIcon } from "../../assets/image-upload-icon.svg";
import { toast } from "react-toastify";
import { addProduct, uploadImage } from "../../api/adminApi";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../redux/slices/adminSlice";

const sizesData = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export const AdminModal = ({ open, onClose, selectedCategory }) => {
  const [sizes, setSizes] = useState([]);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const valueChangeHandler = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setProduct((prevState) => ({
      ...prevState,
      [inputName]: inputName === "price" ? Number(inputValue) : inputValue,
    }));
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };

  const imageChangeHadler = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const productData = {
        ...product,
        sizes,
        category: selectedCategory,
        dateOfCreation: new Date().toISOString(),
      };
      const formData = new FormData();
      formData.set("file", image);
      const imageResult = await uploadImage(formData);
      productData.images = imageResult.data.link;
      console.log(productData);
      await addProduct(productData);
      dispatch(getProductsByCategory(selectedCategory));
      toast.success("Продукт успешно создан!");
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal open={open}>
      <Content>
        <TitleSection>
          <h1>Добавить новую позицию</h1>
          <CloseIcon />
        </TitleSection>
        <Form onSubmit={submitHandler}>
          <Input
            fullWidth
            label="Название товара"
            type="text"
            name="title"
            onChange={valueChangeHandler}
          />
          <Input
            fullWidth
            label="Цена"
            type="number"
            name="price"
            onChange={valueChangeHandler}
          />
          {/* <Input fullWidth label="Количество в запасе" type="number" /> */}
          <FormControl>
            <InputLabel id="sizes">Доступные размеры</InputLabel>
            <Select
              onChange={handleSizeChange}
              multiple
              value={sizes}
              id="sizes"
              sx={{ color: "black" }}
              label="Доступные размеры"
              fullWidth
            >
              {sizesData.map((size) => (
                <MenuItem value={size} key={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            fullWidth
            label="Цвет"
            name="color"
            type="text"
            onChange={valueChangeHandler}
          />
          <TextField
            fullWidth
            label="Изображение"
            type="text"
            value={image?.name}
            InputProps={{
              endAdornment: (
                <IconButton component="label">
                  <ImageUploadIcon />
                  <input
                    style={{ display: "none" }}
                    type="file"
                    hidden
                    name="[licenseFile]"
                    onChange={imageChangeHadler}
                  />
                </IconButton>
              ),
            }}
          />
          <ButtonsContainer>
            <CancelButton onClick={() => onClose()}>Отменить</CancelButton>
            <ConfirmButton type="submit">Сохранить</ConfirmButton>
          </ButtonsContainer>
        </Form>
      </Content>
    </Modal>
  );
};

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const TitleSection = styled("div")`
  display: flex;
  justify-content: space-between;
  & > svg {
    cursor: pointer;
  }
  margin-bottom: 49px;
`;

const Content = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 507px;
  background-color: #fff;
  padding: 14px 15px 0 15px;
  border-radius: 10px;
`;

const CancelButton = styled(Button)`
  min-width: 140px;
  background-color: #7e8494;
`;

const ConfirmButton = styled(Button)`
  min-width: 140px;
  margin-left: 16px;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  margin: 42px 0 42px 0;
`;
