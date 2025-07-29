import { Label, TextInput, Select, Textarea, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductsMutation } from "../../redux/api";

const schemaValidation = z.object({
  make: z.string().min(2, "Minimum 2 characters required"),
  model: z.string().min(2, "Minimum 2 characters required"),
  year: z.number()
    .min(1886, "Year must be after 1886")
    .max(new Date().getFullYear() + 1, "Year cannot be in the future"),
  price: z.number().min(0, "Price cannot be negative"),
  mileage: z.number().min(0, "Mileage cannot be negative"),
  description: z.string().min(10, "Description should be at least 10 characters"),
  color: z.string().min(2, "Minimum 2 characters required"),
  fuel_type: z.string().min(2, "Please select a fuel type"),
  transmission: z.string().min(2, "Please select a transmission type"),
  image: z.string().url("Please enter a valid URL").min(2),
});

export function CreateProductForm({ accessToken }) {
  const [createCar, { isLoading, isError, error, isSuccess }] = useCreateProductsMutation();
  
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      make: "",
      model: "",
      year: new Date().getFullYear(),
      price: 0,
      mileage: 0,
      description: "",
      color: "",
      fuel_type: "",
      transmission: "",
      image: "",
    }
  });

  const onSubmit = async (data) => {
    try {
      await createCar({
        newCar: data,
        accessToken: accessToken // Use the passed token instead of hardcoding
      }).unwrap();
      reset();
    } catch (err) {
      console.error("Error creating car:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">Add New Vehicle</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200 border-b pb-2">Basic Information</h3>
          
          <div>
            <Label htmlFor="make" value="Make*" className="mb-1 block" />
            <TextInput 
              id="make" 
              placeholder="Toyota" 
              {...register("make")} 
              color={errors.make ? "failure" : "gray"}
            />
            {errors.make && (
              <p className="mt-1 text-sm text-red-500">{errors.make.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="model" value="Model*" className="mb-1 block" />
            <TextInput
              id="model"
              placeholder="Camry"
              {...register("model")}
              color={errors.model ? "failure" : "gray"}
            />
            {errors.model && (
              <p className="mt-1 text-sm text-red-500">{errors.model.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="year" value="Year*" className="mb-1 block" />
            <TextInput
              id="year"
              type="number"
              {...register("year", { valueAsNumber: true })}
              color={errors.year ? "failure" : "gray"}
            />
            {errors.year && (
              <p className="mt-1 text-sm text-red-500">{errors.year.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="price" value="Price ($)*" className="mb-1 block" />
            <div className="relative">
              <TextInput
                id="price"
                type="number"
                className="pl-8"
                {...register("price", { valueAsNumber: true })}
                color={errors.price ? "failure" : "gray"}
              />
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            </div>
            {errors.price && (
              <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* Specifications Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200 border-b pb-2">Specifications</h3>
          
          <div>
            <Label htmlFor="mileage" value="Mileage (miles)*" className="mb-1 block" />
            <TextInput
              id="mileage"
              type="number"
              {...register("mileage", { valueAsNumber: true })}
              color={errors.mileage ? "failure" : "gray"}
            />
            {errors.mileage && (
              <p className="mt-1 text-sm text-red-500">{errors.mileage.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="color" value="Color*" className="mb-1 block" />
            <TextInput
              id="color"
              placeholder="Red"
              {...register("color")}
              color={errors.color ? "failure" : "gray"}
            />
            {errors.color && (
              <p className="mt-1 text-sm text-red-500">{errors.color.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="fuel_type" value="Fuel Type*" className="mb-1 block" />
            <Select
              id="fuel_type"
              {...register("fuel_type")}
              color={errors.fuel_type ? "failure" : "gray"}
            >
              <option value="">Select fuel type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
            {errors.fuel_type && (
              <p className="mt-1 text-sm text-red-500">{errors.fuel_type.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="transmission" value="Transmission*" className="mb-1 block" />
            <Select
              id="transmission"
              {...register("transmission")}
              color={errors.transmission ? "failure" : "gray"}
            >
              <option value="">Select transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="CVT">CVT</option>
            </Select>
            {errors.transmission && (
              <p className="mt-1 text-sm text-red-500">{errors.transmission.message}</p>
            )}
          </div>
        </div>

        {/* Full-width fields */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <Label htmlFor="description" value="Description*" className="mb-1 block" />
            <Textarea
              id="description"
              rows={4}
              placeholder="Describe the vehicle's features, condition, and history..."
              {...register("description")}
              color={errors.description ? "failure" : "gray"}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="image" value="Image URL*" className="mb-1 block" />
            <TextInput
              id="image"
              type="url"
              placeholder="https://example.com/car-image.jpg"
              {...register("image")}
              color={errors.image ? "failure" : "gray"}
            />
            {errors.image ? (
              <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-500">Please provide a direct image URL</p>
            )}
          </div>
        </div>

        {/* Form actions */}
        <div className="md:col-span-2 flex justify-end space-x-4 pt-4 border-t">
          <Button 
            type="button" 
            color="light"
            onClick={() => reset()}
            disabled={isLoading}
          >
            Reset
          </Button>
          <Button 
            type="submit" 
            color="blue"
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Add Vehicle"}
          </Button>
        </div>

        {/* Status messages */}
        {isError && (
          <div className="md:col-span-2">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error?.data?.message || "Failed to create vehicle. Please try again."}
            </div>
          </div>
        )}
        {isSuccess && (
          <div className="md:col-span-2">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Vehicle added successfully!
            </div>
          </div>
        )}
      </form>
    </div>
  );
}